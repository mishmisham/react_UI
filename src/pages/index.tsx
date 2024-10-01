import BaseInputDemo from '@/pages/BaseInputDemo';
import TextareaDemo from './TextareaDemo';
import SelectDemo from '@/pages/SelectDemo';
import BaseButtonDemo from './BaseButtonDemo';
import ButtonSelectDemo from './ButtonSelectDemo';
import RangeSliderDemo from './RangeSliderDemo';
import SwitchDemo from './SwitchDemo';
import BaseCheckboxDemo from './BaseCheckboxDemo';
import TabsDemo from './TabsDemo';
import TooltipDemo from './TooltipDemo';
import ModalDemo from './ModalDemo';
import MenuDemo from './MenuDemo';
import FileInputDemo from './FileInputDemo';
import TreeSelectDemo from './TreeSelectDemo';

const Demos = () => {
  return (
    <div>
      <BaseInputDemo />
      <TextareaDemo />
      <SelectDemo />
      <BaseButtonDemo />
      <ButtonSelectDemo />
      <RangeSliderDemo />
      <SwitchDemo />
      <BaseCheckboxDemo />
      <TreeSelectDemo />
      <TabsDemo />
      <TooltipDemo />
      <ModalDemo />
      <MenuDemo />
      <FileInputDemo />
    </div>
  );
};

export default Demos;
