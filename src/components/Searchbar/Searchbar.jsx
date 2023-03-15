import { Header, Form, Button } from './Serchbar.styled';

export const Searchbar = ({ onSubmit, onChange }) => {
  return (
    <Header className="searchbar">
      <Form className="form" onSubmit={onSubmit}>
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </Form>
    </Header>
  );
};
