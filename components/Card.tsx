

const Card = () => {
  return (
    <div className="card w-[16rem] lg:w-[18rem] bg-base-100 hover:shadow-2xl shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
            <span className="text-sm font-medium">September 12, 2023</span>
            <p className="card-title font-bold line-clamp-2">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
        </div>
    </div>
  )
}

export default Card