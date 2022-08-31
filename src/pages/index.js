import {Header} from '../ui/components/Header'
import {Button} from '../ui/components/Button'
import { Input } from '../ui/components/Input'
import Link from 'next/link'

export default function Index() {
  return (
    <main className='flex flex-col md:flex-row justify-between mx-5 md:mx-0 mt-auto'>
      <div className='my-8 md:w-2/4 text-center'>
        <p className='text-green-dark text-[24px] font-serif'>
          Cuide de sua <strong className='text-[36px]'>saúde mental</strong> 
        <br/> extravasse seus <strong className='text-[36px]'>sentimentos</strong><br/> de
          forma segura com o <br/>
        </p>
        <p className='mt-8 text-[36px] md:text-end md:mr-7 font-bold text-orange'>
          <strong>
            Meu Diário.
          </strong>
        </p>
        
      </div>
      <div className='bg-green md:w-2/4 flex justify-center'>
        <form action='#' className='md:w-fit pb-4 mx-0 my-auto text-center'> 
          <Input name={'Login'} cream={true}/>
          <Input name={'Senha'} cream={true}/>
          
          <div className='flex flex-col md:pl-5 md:flex-row text-green-dark font-bold justify-center text-sm leading-3 md:leading-none py-3'>
            <Link href={'#'}>            
              <p className='cursor-pointer '>Esqueci minha senha.</p>
            </Link>&nbsp;&nbsp;
            <Link href={'/cadastro'}>            
              <p className='pb-4'>Não tem cadastro? <span className='cursor-pointer'>Cadastre-se</span></p>
            </Link>
          </div>
          <Button type={'submit'}>Enviar</Button>
        </form>        
      </div>
    </main>
  )
}