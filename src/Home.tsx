import { GridItems } from '@/components/GridItems';
import { useGetList } from '@/hooks/useGetList';
import { Button } from '@tremor/react';

function Home() {
  const { numberPage, list, handleNextPage, handlePrevPage, loading } =
    useGetList()
  if (list.length === 0 && !loading) {
    return (
      <>
        <p className="mt-0 text-center w-max  m-auto text-xl font-medium text-gray-700">
          Not found users 😭{' '}
        </p>
        <span role='button' className="text-center block text-tremor-brand hover:text-tremor-brand-emphasis" onClick={handlePrevPage}> Volver</span>
      </>
    )
  }

  return (
    <main className="">
      <h1 className="text-gray-700 text-4xl mb-8">Users Api</h1>

      <GridItems list={list} />
      <div className="flex items-center gap-2 mx-auto w-max mt-4">
        {numberPage > 1 && (
          <Button disabled={loading} onClick={handlePrevPage}>
            {numberPage > 1 && list.length === 0 ? 'Back' : 'Prev Page'}
          </Button>
        )}
        {list.length > 0 && (
          <Button disabled={loading} onClick={handleNextPage}>
            Next Page
          </Button>
        )}
      </div>
      {loading && <p className="text-center">Loading...</p>}
    </main>
  )
}

export default Home
