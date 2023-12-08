import {TouchableOpacity, Text} from 'react-native';
import {styled} from 'nativewind';

function StyledButton({...rest}) {
  return (
    <TouchableOpacity
      className="h-14 bg-green-500 rounded-md items-center justify-center"
      {...rest}>
      <Text className="text-white font-bold text-md">Entrar</Text>
    </TouchableOpacity>
  );
}

const Button = styled(StyledButton);

export {Button};
