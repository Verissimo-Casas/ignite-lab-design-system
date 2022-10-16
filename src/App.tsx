import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
      <header className='flex flex-col items-center'>
        <Logo/>
        <Heading size='large' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text className='text-gray-400 mt-1' size='large'>
          Faca login e  come a usar!
        </Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-sm gap-4 mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3' >
          <Text className='font-semibold'>Endereco de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Insira o Email!'/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3' >
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='**********'/>
          </TextInput.Root>
        </label>

        <label htmlFor="reemember" className=' flex items-center gap-2'>
          <Checkbox id='reemember'/>
          <Text size='small' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='small'>
          <a href="" className='text-gray-400 underline hover:text-gray-300'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='small'>
          <a href="" className='text-gray-400 underline hover:text-gray-300'>Nao possui conta? crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

export default App
