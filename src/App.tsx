import { Container, Flex, Heading, Text } from '@radix-ui/themes'
import { ProductGrid } from './components/ProductGrid'
import { useProducts } from './hooks/useProducts'

const App = () => {
  const { products, loading, error } = useProducts()

  return (
    <Container size="4" style={{ padding: '2rem' }}>
      <Flex direction="column" gap="6">
        <Flex direction="column" gap="2" align="center">
          <Heading size="8" style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)', 
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Fake Store
          </Heading>
          <Text size="4" color="gray">Discover amazing products at great prices</Text>
        </Flex>
        <ProductGrid products={products} loading={loading} error={error} />
      </Flex>
    </Container>
  )
}

export default App
