import Peer from 'peerjs';

export const generatePeerId = async () => {
  return new Promise((resolve, reject) => {
    const peer = new Peer({ host: 'localhost', port: 9000, path: '/myapp' });

    peer.on('open', (id) => {
      peer.destroy(); 
      resolve(id);
    });

    peer.on('error', (err) => {
      peer.destroy();
      reject(err);
    });
  });
};
