function SectionHead({ number, title, aside }) {
  return (
    <div className="section-head">
      <h2>{`${number} // ${title}`}</h2>
      {aside && <span>{aside}</span>}
    </div>
  );
}

export default SectionHead;
