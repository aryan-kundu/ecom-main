import React from 'react'
import Order from '@/model/order';
import mongoose from 'mongoose';

export default function Orders() {
  return (
    <div>
        <div className='mx-32 my-5'>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full text-left text-sm font-light text-surface ">
          <thead
            class="border-b border-neutral-200 font-medium ">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">First</th>
              <th scope="col" class="px-6 py-4">Last</th>
              <th scope="col" class="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 ">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">Mark</td>
              <td class="whitespace-nowrap px-6 py-4">Otto</td>
              <td class="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr class="border-b border-neutral-200 ">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">Jacob</td>
              <td class="whitespace-nowrap px-6 py-4">Thornton</td>
              <td class="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr class="border-b border-neutral-200 ">
              <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td class="whitespace-nowrap px-6 py-4">Larry</td>
              <td class="whitespace-nowrap px-6 py-4">Wild</td>
              <td class="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>

    </div>
  )
}




export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }
    let product = await Order.findOne({slug :context.query.slug});
    
    let varient = await Order.find();
    let colourSizeSlug ={}
    for(let item of varient){
      if(Object.keys(colourSizeSlug).includes(item.color)){
        colourSizeSlug[item.color][item.size]={slug:item.slug}
      }
      else{
        colourSizeSlug[item.color]={}
        colourSizeSlug[item.color][item.size]={slug:item.slug}
      }
    }
  
    
    return {
      props: { product: JSON.parse(JSON.stringify(product)),varient: JSON.parse(JSON.stringify(colourSizeSlug))},
    };
  }
  