# kl-product-card


Deployment test package to npm

### Kunjo Lee

## Ejemplo
```
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from 'kl-product-card';
```

``` 
<ProductCard
    product={product}
    initialValues={{
        count: 3,
        maxCount: 10,
    }}
>
    {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```