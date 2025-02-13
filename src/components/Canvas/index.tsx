


import FabricCanvas from './Fabric';
import KonvaCanvas from './Konva';

export default function CanvasEditor() {
  const FABRIC = 'fabric';
  const selectedLib = FABRIC;
  return (
    <>
      {
        selectedLib === FABRIC
        ? <FabricCanvas />
        : <KonvaCanvas />
      }
    </>
  )
}