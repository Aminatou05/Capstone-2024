import React from 'react'

const agents = [
  { id: 1, name: 'Mamadou Sy', email: 'sy@lenco.com', phone: '123-456-7890' },
  { id: 2, name: 'Ibrahim', email: 'ibrahim@gmail.com', phone: '234-567-8901' },
  
];
const AgentInfo = () => {
  
  return (
    <div className="max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 m-4 bg-yellow-900">
      <h2 className="text-xl font-bold mb-10">Agents</h2>
      <ul>
        {agents.map(agent => (
          <li key={agent.id} className="border-b py-4">
            <p className=""><strong>Name:</strong> {agent.name}</p>
            <p className="text-blue-400"><strong>Email:</strong> {agent.email}</p>
            <p className="text-blue-400"><strong>Phone:</strong> {agent.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default AgentInfo;
