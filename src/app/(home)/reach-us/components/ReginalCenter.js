import Link from "next/link"
async function ReginalCenter({city,address,ph_no,mapLink}) {
  return (
    <Link target={'_blank'} href={mapLink} className="cursor-pointer flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
    <blockquote className="max-w-2xl mx-auto text-gray-500">
    <h3 className="text-5xl font-semibold text-gray-900">
        {city}
    </h3>
    <p className="my-4">
        {address}
    </p>
    {ph_no && <p>Phone: {ph_no}</p>}
    </blockquote>
</Link>
  )
}

export default ReginalCenter