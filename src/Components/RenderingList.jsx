export default function RenderingList() {
  const product = [
    { title: "cabbage", id: 1,isFruit: false },
    { title: "apple", id: 2,isFruit: true },
    { title: "orange", id: 3, isFruit: true },
    { title: "Lemon", id: 4, isFruit: true },
    { title: "Banana", id: 5, isFruit: true },
    { title: "Potato", id: 6, isFruit: false },
    { title: "Tomato", id: 7, isFruit: false },
    { title: "Onion", id: 8, isFruit: false },
    { title: "Garlic", id: 9, isFruit: false },
    { title: "Ginger", id: 10, isFruit: false }
  ];

  const productList = product.map((item) => {
    return <li key={item.id} className={item.isFruit ? 'text-indigo-600 text-xl':'text-gray-700'}>{item.title}</li>;
  });

  return (
    <>
      <div>RenderingList</div>
      <ul className="list-none text-start items-start list-inside">{productList}</ul>
    </>
  );
}
