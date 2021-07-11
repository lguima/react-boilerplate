import tw from 'twin.macro'

const Wrapper = tw.main`
  bg-[#06092B]
  text-white
  w-full
  h-full
  p-12
  flex
  flex-col
  text-center
  items-center
  justify-center
`

const Logo = tw.img`
  w-96
  mb-8
`

const Title = tw.h1`
  text-4xl
`

const Description = tw.h2`
  text-3xl
  font-normal
`

const Illustration = tw.img`
  mt-12
  w-[min(30rem, 100%)]
`

export { Wrapper, Logo, Title, Description, Illustration }
