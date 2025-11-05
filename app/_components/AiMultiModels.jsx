import { useState } from 'react'
import AiModelList from './../../shared/AiModelList'   // ✅ fix import
import { Switch } from "@/components/ui/switch"
import { MessageSquare, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function AiMultiModels() {
  const [aiModelList, setAiModelList] = useState(AiModelList)

  const onToggleChange = (modelId, value) => {
    setAiModelList((prev) =>
      prev.map((m) =>
        m.model === modelId ? { ...m, enable: value } : m
      )
    )
  }

  return (
    <div className='flex flex-1 h-[75vh] border-b'>
      {Array.isArray(aiModelList) && aiModelList.map((model, index) => (
        <div
          key={index}
          className={`flex flex-col border-r h-full overflow-auto 
          ${model.enable ? 'flex-1 min-w-[400px]' : 'w-[100px] flex-none'}`}
        >
          <div className='flex w-full h-[50px] items-center justify-between border-b p-4'>
            <div className='flex items-center gap-4'>
              <Image src={model.icon} alt={model.model} width={24} height={24} />
              {model.enable && (
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={model.subModel?.[0]?.name || "Select model"} />
                  </SelectTrigger>
                  <SelectContent>
                    {model.subModel?.map((subModel, i) => (
                      <SelectItem key={i} value={subModel.name}>{subModel.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            <div>
              {model.enable ? (
                <Switch
                  checked={model.enable}
                  onCheckedChange={(v) => onToggleChange(model.model, v)}
                />
              ) : (
                <MessageSquare
                  className="cursor-pointer"
                  onClick={() => onToggleChange(model.model, true)}
                />
              )}
            </div>
          </div>

          {model.premium && model.enable && (
            <div className='flex items-center justify-center h-full'>
              <Button><Lock /> Upgrade to Unlock</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AiMultiModels
