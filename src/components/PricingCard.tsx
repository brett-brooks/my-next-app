interface PricingCardProps {
    title: string;
    description: string;
    price: string;
}

export default function PricingCard({ title, description, price }: PricingCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-10 h-full flex flex-col justify-between">
            <h2 className="text-2x1 font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-3x1 font-extrabold text-blue-600">{price}</p>
            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">Subscribe</button>
        </div>
    )
}