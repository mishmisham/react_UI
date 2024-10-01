import BaseInputDemo from '@/views/BaseInputDemo';
import TextareaDemo from '@/views/TextareaDemo';
import SelectDemo from '@/views/SelectDemo';
import BaseButtonDemo from '@/views/BaseButtonDemo';
import ButtonSelectDemo from '@/views/ButtonSelectDemo';
import RangeSliderDemo from '@/views/RangeSliderDemo';
import SwitchDemo from '@/views/SwitchDemo';
import BaseCheckboxDemo from '@/views/BaseCheckboxDemo';
import TabsDemo from '@/views/TabsDemo';
import TooltipDemo from '@/views/TooltipDemo';
import ModalDemo from '@/views/ModalDemo';
import MenuDemo from '@/views/MenuDemo';
import FileInputDemo from '@/views/FileInputDemo';
import TreeSelectDemo from '@/views/TreeSelectDemo';

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
