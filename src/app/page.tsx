"use client";

import { Flex, Text, Button, TextField, IconButton, Box, DropdownMenu, Popover } from '@radix-ui/themes';
import { MagnifyingGlassIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function MyApp() {
  const [org, setOrg] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Flex height="100vh" justify="center" align="center">
      <Flex direction="column" gap="6" width="30%">
        <Flex direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Box style={{ paddingLeft: 'var(--space-2)' }}>
              <Text color='gray'>학교 이름</Text>
            </Box>
            <Popover.Root open={open} onOpenChange={setOpen}>
              <Popover.Trigger
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                style={{ padding: '8px', cursor: 'pointer' }}
              >
                <div>
                  <TextField.Root placeholder="Search the docs…" color='red' variant='soft' size="3" value={org} onChange={({ target: { value } }) => setOrg(value)}>
                    <TextField.Slot side='right'>
                      <IconButton variant='ghost' >
                        <Cross1Icon height="16" width="16" />
                      </IconButton>
                    </TextField.Slot>
                    <TextField.Slot side='left'>
                      <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                  </TextField.Root>
                </div>
              </Popover.Trigger>
              <Popover.Content>
                <div style={{ padding: '8px', backgroundColor: 'white', border: '1px solid black' }}>
                  <Flex direction="column" width="100%">
                    <Button style={{ justifyContent: 'flex-start' }} variant='ghost'>충북 소프트랩</Button>
                  </Flex>
                </div>
              </Popover.Content>
            </Popover.Root>
            {/* <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div>
                  <TextField.Root placeholder="Search the docs…" color='red' variant='soft' size="3" value={org} onChange={({ target: { value } }) => setOrg(value)}>
                    <TextField.Slot side='right'>
                      <IconButton variant='ghost' >
                        <Cross1Icon height="16" width="16" />
                      </IconButton>
                    </TextField.Slot>
                    <TextField.Slot side='left'>
                      <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                  </TextField.Root>
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <Flex direction="column" width="100%">
                  <Button style={{ justifyContent: 'flex-start' }} variant='ghost'>충북 소프트랩</Button>
                </Flex>
              </DropdownMenu.Content>
            </DropdownMenu.Root> */}
          </Flex>
        </Flex>
        <Button>로그인</Button>
      </Flex>
    </Flex>
  );
}
