import Image from 'next/image';
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>サンプルページ2</h1>
      <Link href="/sample1">
        サンプルページ1
      </Link>
    </div>
  )
}
export default Index
