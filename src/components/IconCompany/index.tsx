import "./styles.css";

interface IconCompanyProps {
  image: string;
}

const IconCompany = ({ image }: IconCompanyProps) => {
  return (
    <div className="icon-company">
      <img className="icon-image" src={image} alt="" />
    </div>
  );
};

export default IconCompany;
