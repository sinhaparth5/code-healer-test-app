import { Grid, Flex, Spinner, Text } from '@radix-ui/themes'
import { ProductCard } from './ProductCard'
import type { Product } from '../types/product'

interface ProductGridProps {
  products: Product[]
  loading: boolean
  error: string | null
}

export const ProductGrid = ({ products, loading, error }: ProductGridProps) => {
  if (loading) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: '400px' }}>
        <Spinner size="3" />
      </Flex>
    )
  }

  if (error) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: '400px' }}>
        <Text color="red" size="4">Error: {error}</Text>
      </Flex>
    )
  }

  return (
    <Grid columns={{ initial: '1', sm: '2', md: '3', lg: '4' }} gap="5" width="100%">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  )
}
