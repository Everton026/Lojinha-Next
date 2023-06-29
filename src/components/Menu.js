import Link from 'next/link'

export default function Menu(){
  return(
    <div>
      <nav className='bg-[#FFE4E6] text-[#A1A1AA] text-xl'>
        <h1 className='text-center p-3 bg-[#FECDD3] text-[#111827] font-bold'>Everton Store</h1>
        <ul className='flex mx-8 gap-14 justify-center flex-wrap p-4 shadow-lg'>
          <li className='bg-[#18181B] p-1 hover:bg-[#E5E7EB] hover:text-[#111827] transition '> <Link href="/">Início</Link> </li>
          <li className='bg-[#18181B] p-1 hover:bg-[#E5E7EB] hover:text-[#111827] transition '> <Link href="/Carrinho">Carrinho</Link> </li>
          <li className='bg-[#18181B] p-1 hover:bg-[#E5E7EB] hover:text-[#111827] transition '> <Link href="/Cadastro">Cadastro</Link> </li>
          <li className='bg-[#18181B] p-1 hover:bg-[#E5E7EB] hover:text-[#111827] transition '> <Link href="/Login">Login</Link> </li>
        </ul>
      </nav>
    </div>
  )
}