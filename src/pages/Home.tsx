import { FormEvent, useState } from 'react'
import { Logo } from '../components/Logo'
import { useNavigate } from 'react-router-dom'

import { useCreateSubscriberMutation } from '../graphql/generated'

export function Home() {
  const navigator = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    if (!name || !email) return

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigator('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <img src="/static/detail.svg" className="absolute z-[-1]" />

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px] ">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{' '}
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para
            acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={e => handleSubscribe(e)} className="flex flex-col gap-2 w-full">
            <input
              onChange={e => setName(e.target.value)}
              className="bg-gray-900 rounded outline-none px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              onChange={e => setEmail(e.target.value)}
              className="bg-gray-900 rounded outline-none px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button
              className="mt-4 bg-green-500 disabled:opacity-50 uppercase font-bold py-4 rounded text-sm hover:bg-green-700 transition-colors"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/static/mockup.png" className="mt-10" alt="" />
    </div>
  )
}
