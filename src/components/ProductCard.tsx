import { Card, Flex, Text, Badge, Button } from '@radix-ui/themes'
import { StarFilledIcon } from '@radix-ui/react-icons'
import type { Product } from '../types/product'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <Card size="3" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Flex direction="column" gap="3" style={{ height: '100%' }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', height: '240px', objectFit: 'contain', borderRadius: '8px' }}
      />
      <Flex direction="column" gap="2" style={{ flex: 1 }}>
        <Text size="2" weight="bold" style={{ lineHeight: '1.4' }}>
          {product.title}
        </Text>
        <Badge color="violet" variant="soft" style={{ width: 'fit-content' }}>
          {product.category}
        </Badge>
        <Text size="2" color="gray" style={{ 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          display: '-webkit-box', 
          WebkitLineClamp: 2, 
          WebkitBoxOrient: 'vertical' 
        }}>
          {product.description}
        </Text>
      </Flex>
      <Flex justify="between" align="center" mt="auto">
        <Flex align="center" gap="1">
          <StarFilledIcon color="gold" />
          <Text size="2" weight="bold">{product.rating.rate}</Text>
          <Text size="1" color="gray">({product.rating.count})</Text>
        </Flex>
        <Text size="5" weight="bold" color="violet">${product.price}</Text>
      </Flex>
      <Button size="3" style={{ width: '100%' }}>Add to Cart</Button>
    </Flex>
  </Card>
)
