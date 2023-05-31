import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const ADD_WILDER = gql`
  mutation AddWilder($name: String!) {
    addWilder(name: $name) {
      name
    }
  }
`;

const AddWilderForm = () => {
  const [wilderName, setWilderName] = useState('');
  const [addWilder] = useMutation(ADD_WILDER);

  const handleSave = async () => {
    try {
      await addWilder({
        variables: { name: wilderName },
      });
      setWilderName('');
      console.log('Wilder ajouté avec succès');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        value={wilderName}
        onChange={(e) => {
          setWilderName(e.target.value);
        }}
      />
      <br />
      <button onClick={handleSave}>Save Wilder</button>
    </div>
  );
};

export default AddWilderForm;
