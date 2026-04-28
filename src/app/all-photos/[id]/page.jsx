
const PhotoDetailsPage = async({params}) => {
    const {id} = await params
    const res = await fetch('https://pixgen-psi.vercel.app/data.json');
    const photos = await res.json();
    const photo = photos.find(p=> p.id==id);
    console.log(photo, "Details");
    return (
        <div>
            <h1 className="text-center font-semibold text-2xl mt-[15px]">Photo Details</h1>
            <p>{photo.title}</p>
            <p>{photo.prompt}</p>
        </div>
    );
};

export default PhotoDetailsPage;