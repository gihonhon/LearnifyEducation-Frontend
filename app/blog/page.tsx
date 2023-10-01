import Card from "@/components/Card"


const BlogPage = () => {
  return (
    <div className="flex justify-center my-4 lg:my-20">
        <div className="grid grid-cols-1 gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6 md:grid-cols-2 md:gap-6 sm:grid-cols-2 sm:gap-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default BlogPage