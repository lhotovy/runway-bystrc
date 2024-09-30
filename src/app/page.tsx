import { Header } from '@/components/header';
import { Slider } from '@/components/slider';

export default function Home() {
  return (
    <div className='flex flex-col gap-y-4 min-h-screen items-center'>
      <Header/>
      <Slider />
    </div>
  )
}
