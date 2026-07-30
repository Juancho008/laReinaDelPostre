import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { ProductGrid } from '../components/ProductGrid'
import { Footer } from '../components/Footer'
import { Sidebar } from '../components/Sidebar'
import { MOCK_NAV_LEFT, MOCK_NAV_RIGHT } from '../Mock'
import { useCart, useProductFilters, useProducts, useScrollToTop } from '../hooks'

export function ShopPage() {
  const { products, tags, loading, error } = useProducts()
  const {
    cartProducts,
    isEmpty,
    subtotalPrice,
    shippingCost,
    totalPrice,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useCart()
  const {
    searchQuery,
    selectedTagId,
    priceMin,
    priceMax,
    priceCeiling,
    filteredProducts,
    setSearch,
    toggleTag,
    setPriceMax,
    applyPriceFilter,
  } = useProductFilters(products)
  const { scrollToTop } = useScrollToTop()

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
            cartSubtotalPrice={subtotalPrice}
            cartShippingCost={shippingCost}
            cartTotalPrice={totalPrice}
            onCartIncrement={addItem}
            onCartDecrement={decrementItem}
            onCartRemove={removeItem}
            onCartClear={clearCart}
            priceMin={priceMin}
            priceMax={priceMax}
            priceCeiling={priceCeiling}
            onPriceMaxChange={setPriceMax}
            onPriceFilterApply={applyPriceFilter}
          />
        </div>
      </main>
      <Footer onScrollTop={scrollToTop} />
    </div>
  )
}
