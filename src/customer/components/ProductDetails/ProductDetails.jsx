"use client";

import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import mens_kurta from "../../../data/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate } from "react-router-dom";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/cart');
  }

  return (
    <div className="bg-[#FFE0BC] lg:px-20">
      <div className="pt-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-20 mt-10 flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg fill="currentColor" width={16} height={20} viewBox="0 0 16 20" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 my-5 pt-10 bg-[#F1D4A9] rounded-lg">
          {/* Image Gallery */}
          <div className="flex flex-col items-center gap-y-5">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img src={product.images[0].src} alt={product.images[0].alt} className="h-full w-full object-cover object-center" />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item, i) => (
                <div key={i} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover object-center" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-60 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">UniversalOutfit</h1>
              <h2 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                Casual Puff Sleeves Solid Women White Top
              </h2>
            </div>

            <div className="mt-4">
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">₹199</p>
                <p className="opacity-50 line-through">₹211</p>
                <p className="text-green-600 font-semibold">5% Off</p>
              </div>

              <div className="mt-6 flex items-center space-x-3">
                <Rating name="read-only" value={4.5} readOnly />
                <p className="opacity-50 text-sm">56540 Ratings</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">3870 Reviews</p>
              </div>

              {/* Size Selector */}
              <form className="mt-10">
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset className="mt-4">
                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="grid grid-cols-5 gap-4">
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ checked }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              checked ? "ring-2 ring-indigo-500 border-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          <span>{size.name}</span>
                        </Radio>
                      ))}
                    </RadioGroup>
                    <p className="mt-2 text-sm text-indigo-600">
                      Selected Size: <span className="font-semibold">{selectedSize.name}</span>
                    </p>
                  </fieldset>
                </div>

                <Button onClick={handleAddToCart} variant="contained" sx={{ padding: "2rem", py: "1rem", my: "1rem", bgcolor: "#9155fd" }}>
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pr-8">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <p className="text-base text-gray-900 mt-2">{product.description}</p>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <ul className="list-disc space-y-2 pl-4 text-sm mt-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-600">{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <p className="text-sm text-gray-600 mt-2">{product.details}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section>
          <h1 className="font-semibold text-lg pb-4">Recent Review & Rating</h1>
          <div className="border p-5 bg-[#F1EDE1] rounded-lg">
            <Grid container spacing={7} sx={{gap: '45rem'}}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((_, i) => (
                    <ProductReviewCard key={i} />
                  ))}
                </div>
              </Grid>
              <Grid item xs={5}>
                <h1 className="font-semibold pb-1 text-xl">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className="opacity-60">59350 Ratings </p>
                </div>
                <Box mt={3}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={3}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "white", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* Similar Products */}
        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold">Similar Products</h1>
          <div className="flex flex-wrap gap-5 justify-start bg-[#F1D4A9] p-10">
            {mens_kurta.map((item, index) => (
              <div key={index} className="flex-grow-0">
                <HomeSectionCard product={item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
