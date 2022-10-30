import Image from 'next/image';
import Link from 'next/link'
import sampleImage from '../../public/cat.jpeg'

const Index = () => {
  return (
    <div>
      <h1>サンプルページ1</h1>
      <Link href="/sample2">
        サンプルページ2
      </Link>
      <div>
        <Image src={sampleImage} alt={'sample cat'} placeholder="blur" width={500} />
      </div>
    </div>
  )
}
export default Index
