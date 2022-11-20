
function Colors({data}) {
  return <ul className="colors">
    {
      data.map((index) => {
        return <li key={index}></li>
      })
    }
</ul>
}

export default Colors