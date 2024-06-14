export const Ex01 = ({ urlData }) => {
  // console.log(urlData);
  return (
    <div>
      {urlData.map((data) => (
        <div key={data.id}>
          <h2>{data.title}</h2>
          <a href={data.linkUrl}>
            <img src={data.imgUrl} alt={data.title} width={300} />
          </a>
          <p>{data.desc}</p>
        </div>
      ))}
    </div>
  );
};
