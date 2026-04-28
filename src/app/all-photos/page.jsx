import PhotoCard from "@/Components/PhotoCard";

const AllPhotosPage = async () => {
    const res = await fetch ('https://pixgen-psi.vercel.app/data.json');
    const data = await res.json();
    console.log(data);
    return (
        <div className="container mx-auto">
            <h1 className="text-center font-semibold text-2xl mt-[15px]">All Photos</h1>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map(photo=> <PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default AllPhotosPage;