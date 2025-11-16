import { IconPlus } from "@tabler/icons-react"
import { ArrowUpIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
  InputGroupText,
} from "@/components/ui/input-group"

export function ChatBox() {
  return (
    <div className="w-full max-w-xl">
      <InputGroup>
        <InputGroupTextarea placeholder="Chinese sentence to translate..." rows={3} />
        <InputGroupAddon align="block-end">
          {/* Left-side + icon */}
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-sm"
          >
            <IconPlus />
          </InputGroupButton>

          {/* Dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Right-side info + send */}
          <InputGroupText className="ml-auto"></InputGroupText>
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-sm"
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
