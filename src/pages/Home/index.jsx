import { useState } from "react";
import {
  Container,
  Card,
  ImageArea,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
} from "./styles"; // Importando do arquivo styles.js na mesma pasta

function Home() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("✅ Cadastro realizado com sucesso!");

    // Limpar campos
    setNome("");
    setIdade("");
    setEmail("");
  }

  return (
    <Container>
      <Card>
        <ImageArea>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Usuários"
          />
        </ImageArea>

        <Title>Cadastro de Usuários</Title>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>
              Nome <span>*</span>
            </Label>
            <Input
              type="text"
              placeholder="Digite seu nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>
              Idade <span>*</span>
            </Label>
            <Input
              type="number"
              placeholder="Digite sua idade"
              required
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="full">
            <Label>
              E-mail <span>*</span>
            </Label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Home;
