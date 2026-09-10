export default function AboutPage() {
    return (
        <div className="w-full flex flex-col items-center px-4 py-10 lg:py-16">

            <div className="w-full max-w-[900px] flex flex-col items-center text-center gap-4 mb-10">
                <h1 className="text-3xl lg:text-5xl font-bold text-secondary">About Isuri Computers</h1>
                <p className="text-gray-600 text-lg lg:text-xl">
                    Your trusted one-stop shop for computers, parts, and accessories.
                </p>
            </div>

            <div className="w-full max-w-[900px] flex flex-col gap-8">

                <div className="bg-white rounded-md shadow-md p-6">
                    <h2 className="text-xl lg:text-2xl font-semibold text-secondary mb-2">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Isuri Computers is dedicated to bringing you quality computers and accessories
                        at fair prices, backed by a smooth online shopping experience and support
                        you can rely on.
                    </p>
                </div>

                <div className="bg-white rounded-md shadow-md p-6">
                    <h2 className="text-xl lg:text-2xl font-semibold text-secondary mb-2">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We aim to make buying technology simple, transparent, and stress-free —
                        from browsing our catalog to getting your order at your doorstep.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-md shadow-md p-6 text-center">
                        <h3 className="text-lg font-semibold text-secondary mb-1">Wide Selection</h3>
                        <p className="text-gray-600 text-sm">
                            Laptops, desktops, parts, and accessories from trusted brands.
                        </p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-6 text-center">
                        <h3 className="text-lg font-semibold text-secondary mb-1">Fast Delivery</h3>
                        <p className="text-gray-600 text-sm">
                            Quick and reliable shipping so you get your order without the wait.
                        </p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-6 text-center">
                        <h3 className="text-lg font-semibold text-secondary mb-1">Customer Support</h3>
                        <p className="text-gray-600 text-sm">
                            We're here to help before, during, and after your purchase.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-md shadow-md p-6 text-center">
                    <h2 className="text-xl lg:text-2xl font-semibold text-secondary mb-2">Get In Touch</h2>
                    <p className="text-gray-600">
                        Have questions? Browse our <a href="/products" className="text-accent font-semibold hover:underline">products</a> or reach out to our support team anytime.
                    </p>
                </div>

            </div>

        </div>
    );
}