import ProductsContainer from '@/components/products/ProductsContainer';

// get the value from URL.
//serchParams 훅에서 쿼리스트링(get the value from URL)을 읽을 수 있다.(in server component)
// 한편 // next/navigation의 useSerchParams 훅에서 쿼리스트링(get the value from URL)을 읽을 수 있다.(in client component)
function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || ''; // if search is undefined, action(fetchAllProducts) is not work
  // console.log(searchParams);

  return <ProductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
