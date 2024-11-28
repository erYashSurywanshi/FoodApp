import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_Link = "http://localhost:9000";

const App = () => {
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);
  const [loeding, setLoeding] = useState(false);
  const [filter, setfilter] = useState(null);
  const [selectedbtn, setselectedbtn] = useState("all");
  useEffect(() => {
    const Api = async () => {
      setLoeding(true);
      try {
        const responce = await fetch(BASE_Link);

        const json = await responce.json();

        setdata(json);
        setfilter(json);
        setLoeding(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    Api();
  }, []);

  const filtersearch = (e) => {
    const filtervalue = e.target.value;

    if (filtersearch == "") {
      filtersearch(null);
    }

    const filteredFood = data?.filter((food) =>
      food.name.toLowerCase().includes(filtervalue.toLowerCase())
    );
    setfilter(filteredFood);
  };

  const filterfood = (type) => {
    if (type == "all") {
      setfilter(data);
      return;
    } else {
      const filteredFood = data?.filter(
        (food) => food.type.toLowerCase() == type.toLowerCase()
      );
      setfilter(filteredFood);
      setselectedbtn(type);
    }
  };

  const btnclick = [
    {
      name: "all",
      type: "all",
    },
    {
      name: "lunch",
      type: "lunch",
    },
    {
      name: "breakfast",
      type: "breakfast",
    },
    {
      name: "dinner",
      type: "dinner",
    },
  ];
  if (error) return <div>{error}</div>;
  if (loeding) return <div>Loading....</div>;

  return (
    <Container>
      <Topcontainer>
        <div>
          <img src="./logo.svg" alt="" />
        </div>
        <div>
          <input
            onChange={filtersearch}
            type="text"
            placeholder="Search Food...."
          />
        </div>
      </Topcontainer>
      <ButtonContainer>
        {btnclick.map((value) => (
          <Button key={value.type} onClick={() => filterfood(value.type)}>
            {value.name}
          </Button>
        ))}
      </ButtonContainer>
      <SearchResult data={filter} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-height: 1200px;
  margin: 0 auto;
`;
const Topcontainer = styled.div`
  display: flex;
  height: 140px;
  justify-content: space-between;
  align-items: center;
  padding: 25px 120px;

  div input {
    width: 285px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ff0000;
    background-color: transparent;
    color: white;
    border-bottom: 2px solid red;
    background-color: black;

    @media (0 < width < 600px) {
      width: 180px;
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
`;
