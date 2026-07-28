import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { ProductGrid } from '../components/ProductGrid'
import { ScrollToTop } from '../components/ScrollToTop'
import { Sidebar } from '../components/Sidebar'
import { MOCK_NAV_LEFT, MOCK_NAV_RIGHT } from '../Mock'
import { useCart, useProductFilters, useProducts, useScrollToTop } from '../hooks'

export function ShopPage() {
  const { products, tags, loading, error } = useProducts()
  const { cartProducts, isEmpty, addItem } = useCart()
  const { searchQuery, selectedTagId, filteredProducts, setSearch, toggleTag } =
    useProductFilters(products)
  const { visible, scrollToTop } = useScrollToTop()

  return (
    <div className="shop-page">
      <Navbar leftItems={MOCK_NAV_LEFT} rightItems={MOCK_NAV_RIGHT} />
      <Hero />
      <main className="shop-main">
        {error ? <p className="shop-status shop-status--error">{error}</p> : null}
        <div className="shop-layout">
          <ProductGrid
            products={filteredProducts}
            loading={loading}
            onAddToCart={addItem}
          />
          <Sidebar
            searchQuery={searchQuery}
            onSearchChange={setSearch}
            onSearchSubmit={() => undefined}
            tags={tags}
            selectedTagId={selectedTagId}
            onToggleTag={toggleTag}
            cartItems={cartProducts}
            cartEmpty={isEmpty}
          />
        </div>
      </main>
      <ScrollToTop visible={visible} onClick={scrollToTop} />
    </div>
  )
}
