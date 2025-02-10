import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function AppViewPage(props) {
  const [application, setApplication] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications } = props;

  useEffect(() => {
    if (applications && id) {
      setApplication(applications.find((app) => Number(app.id) === Number(id)));
    }
  }, [applications, id]);

  if (!application) return <p>No such product with ID: {id}</p>;

  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(1)}>Go Forward</button>
      </nav>
      <section>
        <h2>
          {application.name}
          <em> (ID: {application.id})</em>
        </h2>
        <p>£{application.price}</p>
      </section>
    </div>
  );
}

export default AppViewPage;
