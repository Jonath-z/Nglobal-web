import NewsPublisherCard from "./NewsPublisherCard"
// import { useGetPublishersQuery } from "../features/newsApi"
import { nanoid } from "nanoid"

const Publishers = () => {
  // const {
  //   // data: publishers,
  //   isLoading,
  //   isError,
  // } = useGetPublishersQuery()

  // if (!isLoading && !isError)
  return (
    <div className="xl:col-span-1 w-full h-fit sticky px-5 xl:px-0 top-20 text-black py-10">
      <h2 className="font-bold text-2xl pb-5">Publishers</h2>
      {/* Commented because I reached the request limit */}
      {/* <div className="grid grid-cols-1 divide-y divide-solid">
          {publishers.map(
            (publisher, index) =>
              index < 100 && (
                <NewsPublisherCard
                  key={nanoid()}
                  publisher={publisher}
                />
              )
          )}
        </div> */}

      <div className="grid grid-cols-1 divide-y divide-solid">
        {Array.from(Array(10).keys()).map(() => (
          <NewsPublisherCard
            key={nanoid()}
            publisher={{
              name: "CNN news",
              id: "cnn",
              description: "News company",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Publishers
