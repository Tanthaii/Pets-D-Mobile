import { TYPHOON_API_URL, TYPHOON_API_KEY } from '../config';

export const fetchAIResponses = async (question: string) => {
  try {
    const response = await fetch(TYPHOON_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TYPHOON_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'typhoon-v1.5x-70b-instruct',
        messages: [
          { role: 'system',  content: 'คุณคือผู้ช่วยอัจฉริยะที่เชี่ยวชาญด้านศัตรูพืชและการเกษตร กรุณาตอบคำถามเป็นภาษาไทยเท่านั้น โดยให้ข้อมูลที่ถูกต้องและกระชับ' },
          { role: 'user', content: question }
        ],
        max_tokens: 512,
        temperature: 0.6,
        top_p: 0.95,
        repetition_penalty: 1.05,
        stream: false,
      }),
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    return data.choices[0]?.message?.content || 'ไม่พบคำตอบ';
  } catch (error) {
    console.error('❌ Error fetching AI:', error);
    return 'เกิดข้อผิดพลาดในการเรียก API';
  }
};
