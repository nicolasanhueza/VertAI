import { SUPPORTED_LANGUAGES } from '../constants'
import { type FromLanguage, type Language } from '../types'

const API_URL = import.meta.env.VITE_APP_API_URL || ''

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text

  try {
    const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
    const toCode = SUPPORTED_LANGUAGES[toLanguage]

    // Construimos el cuerpo de la solicitud en formato JSON
    const body = {
      fromLanguage: fromCode,
      toLanguage: toCode,
      text
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${API_KEY}`, // Descomentar si es necesario para autenticar
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const errorData = await response.json(); // Errors details
      throw new Error(`Error: ${errorData.message || 'Error en la respuesta del servidor'}`);
    }

    const data = await response.json();
  return data.translated_text
  } catch (error) {
    console.error('Error translating text:', error);
    return null;
  }
}
