import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // 여기서 데이터베이스에 저장하거나 다른 처리를 할 수 있습니다
    console.log('Analytics 데이터:', data)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics API 에러:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 