import { NextResponse } from 'next/server'

export const GET = async (req: Request, res: Response) => {
  try {
    return NextResponse.json(
      {
        response: 'Success',
        message:
          'Oi equipe RBZ! :) Caso queiram ver mais sobre meu trabalho deem uma olhada no meu portfolio => https://portfolio-vinilouz.vercel.app/',
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
