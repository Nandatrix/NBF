import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function Home() {
  const [profileImagePreview, setProfileImagePreview] = useState();
  const [carImagePreview, setCarImagePreview] = useState();
  const [id, setID] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [CPF, setCPF] = useState();
  const [CNH, setCNH] = useState();
  const [validity, setValidity] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  const [plate, setPlate] = useState();
  const [mark, setMark] = useState();
  const [weight, setWeight] = useState();
  const [owner, setOwner] = useState();
  const [RENAVAM, setRENAVAM] = useState();
  const [driverid, setDriverID] = useState();

  const [codigo_viagem, setCodigo_Viagem] = useState();
  const [estado_rem, setEstado_Rem] = useState();
  const [cidade_rem, setCidade_Rem] = useState();
  const [data_saida, setData_Saida] = useState();
  const [estado_dest, setEstado_Dest] = useState();
  const [cidade_dest, setCidade_Dest] = useState();
  const [data_chegada, setData_Chegada] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/getData")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function imagePreview(e, input) {
    const url = URL.createObjectURL(e.target.files[0]);

    if (input === "profile") setProfileImagePreview(url);
    if (input === "car") setCarImagePreview(url);
  }

  function onSubmitForm(e) {e.preventDefault();
    const driverData = {
      id,
      name,
      age,
      CPF,
      CNH,
      validity,
      phone,
      address,
      plate,
      mark,
      weight,
      owner,
      RENAVAM,
      driverid,
      codigo_viagem,
      estado_rem,
      cidade_rem,
      data_saida,
      estado_dest,
      cidade_dest,
      data_chegada
    };

    axios
      .post("http://localhost:3333/post", driverData)
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <nav class="navbar">
        <img src="logo.png" alt="" className="logo" />
        <div class="linha">
          <h2>CADASTRO NBF PESAGENS</h2>
        </div>
      </nav>

      <div class="tudo">
        <div class="div_motorista">
          <center className="imageContainer">
            <h1 id="title">DADOS DO MOTORISTA</h1>
            <div className="profile">
              <img
                src={profileImagePreview}
                alt=""
                width="250px"
                height="250px"
              />
              <input
                className="inputFile"
                onChange={(e) => imagePreview(e, "profile")}
                type="file"
              />
            </div>
          </center>

          <form onSubmit={(e) => onSubmitForm(e)} class="dataDriver">
            <label for="idMotorista">Id do Motorista</label>
              <input
                onChange={(e) => setID(e.target.value)}
                type="number"
                id="idmotorista"
              />
              <br />

             <label for="nomeMotorista">Nome do Motorista</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="nomemotorista"
                />
                <br />

              <label for="idadeMotorista">Idade do Motorista</label>
                <input
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  id="idadeMotorista"
                />
            <br />

            <label for="cpfMotorista">CPF do Motorista</label>
              <input
                onChange={(e) => setCPF(e.target.value)}
                type="number"
                id="cpfMotorista"
              />
            <br />

            <label for="cnhMotorista">CNH do Motorista</label>
              <input
                onChange={(e) => setCNH(e.target.value)}
                type="number"
                id="motorista"
              />
            <br />

            <label for="cnhValidade"> Validade da CNH</label>
              <input
                onChange={(e) => setValidity(e.target.value)}
                type="date"
                id="cnhValidade"
              />
            <br />

            <label for="telefone">Celular do Motorista</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                id="telefone"
              />
            <br />

            <label for="endereçoMotorista">Endereço do Motorista</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="endereçoMotorista"
              />
              <br />

           
          </form>
          </div>

          <div class="div_veiculo">
          <center className="imageContainer">
            <h1>DADOS DO CAMINHÃO</h1>
              <img src={carImagePreview} alt="" width="300px" height="250px" />
                <input
                  className="inputFile"
                  onChange={(e) => imagePreview(e, "car")}
                  type="file"
                />
          </center>
      
          <form class="dataVeicle">
            <label for="placa">Placa do Veículo</label>
            < input
                onChange={(e) => setPlate(e.target.value)} 
                type="number" 
                id="placa"
              />
              <br />

            <label for="marca">Marca do Veículo</label>
              <input
                onChange={(e) => setMark(e.target.value)}
                type="text"
                id="marca"
              />
            <br />

            <label for="tara">Tara do Veículo</label>
              <input
                onChange={(e) => setWeight(e.target.value)}
                type="number" 
                id="tara"
              />
              <br />

            <label for="proprietario">Proprietário do Veículo</label>
                <input
                  onChange={(e) => setOwner(e.target.value)} 
                  type="text" 
                  id="proprietario" />
            <br />

            <label for="renavam">RENAVAM</label>
                <input
                  onChange={(e) => setRENAVAM(e.target.value)} 
                  type="text" 
                  id="renavam"
                />
            <br />

            <label for="motoristaid">Id do Motorista</label>
                <input
                  onChange={(e) => setDriverID(e.target.value)}
                  type="text" 
                  id="motoristaid" />
          </form>
        </div>

        <div class="rota">
          <center>
            <h1>DADOS DA VIAGEM</h1>

              <form className="datatrip">

              <label for="codigo_viagem">Código da Viagem</label>
                  <input
                    onChange={(e) => setCodigo_Viagem(e.target.value)}
                    type="number" 
                    id="codigo_viagem" 
                />
                <br />

              <label for="saida_estado">Estado Remetente</label>
                <input
                  onChange={(e) => setEstado_Rem(e.target.value)}
                  type="text" 
                  id="saida_estado" 
                />
                <br />

                <label for="saida_cidade">Cidade Remetente</label>
                  <input
                    onChange={(e) => setCidade_Rem(e.target.value)}
                    type="text" 
                    id="saida_cidade" 
                />
              <br />

              <label for="data_saida">Data da Saída</label>
                <input
                  onChange={(e) => setData_Saida(e.target.value)}
                  type="date"
                  id="data_saida"
                />
                <br />

                <label for="chegada_estado">Estado Destinatário</label>
                <input
                  onChange={(e) => setEstado_Dest(e.target.value)}
                  type="text" 
                  id="chegada_estado" 
                />
                <br />

                <label for="chegada_cidade">Cidade Destinatária</label>
                  <input
                    onChange={(e) => setCidade_Dest(e.target.value)}
                    type="text" 
                    id="chegada_cidade" 
                />
                <br />
                
                
                <label for="data_chegada">Data Estimada de Chegada</label>
                  <input
                    onChange={(e) => setData_Chegada(e.target.value)}
                    type="date" 
                    id="data_chegada" 
                />

            <button className="button" type="submit">
              Enviar
            </button>

            <button className="button" type="reset">
              Resetar
            </button>

          </form>
          </center>
        </div>

      </div>
      
    </>
  );
}

export default Home;
