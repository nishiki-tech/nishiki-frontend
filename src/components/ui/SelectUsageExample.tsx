/**
 * This file is used as an example for the Select component.
 * Once we're done with the example, we can delete this file.
 */

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

export function SelectUsageExample() {
  return (
    <div className="w-full px-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export function SelectScrollableUsageExample() {
  return (
    <div className="flex">
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern (EST)</SelectItem>
            <SelectItem value="cst">Central (CST)</SelectItem>
            <SelectItem value="mst">Mountain (MST)</SelectItem>
            <SelectItem value="pst">Pacific (PST)</SelectItem>
            <SelectItem value="akst">Alaska (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii (HST)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean(GMT)</SelectItem>
            <SelectItem value="cet">Central European(CET)</SelectItem>
            <SelectItem value="eet">Eastern European(EET)</SelectItem>
            <SelectItem value="west">We</SelectItem>
            <SelectItem value="cat">Cen</SelectItem>
            <SelectItem value="eat">Eas</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="msk">Mo</SelectItem>
            <SelectItem value="ist">I</SelectItem>
            <SelectItem value="cst_china">Ch </SelectItem>
            <SelectItem value="jst">Ja</SelectItem>
            <SelectItem value="kst">Ko</SelectItem>
            <SelectItem value="ist_indonesia">Ind</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Australia & Pacific</SelectLabel>
            <SelectItem value="awst">Aus</SelectItem>
            <SelectItem value="acst">Aus</SelectItem>
            <SelectItem value="aest">Au</SelectItem>
            <SelectItem value="nzst">Ne</SelectItem>
            <SelectItem value="fjt">Fi</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>South America</SelectLabel>
            <SelectItem value="art">Ar</SelectItem>
            <SelectItem value="bot">Bo</SelectItem>
            <SelectItem value="brt">Br</SelectItem>
            <SelectItem value="clt">Ch</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
