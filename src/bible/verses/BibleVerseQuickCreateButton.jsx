import { useState } from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import { Add, Cancel } from "@mui/icons-material"
import React from "react"
import {
  Button,
  Form,
  NumberInput,
  required,
  SaveButton,
  TextInput,
  useCreate,
  useNotify,
} from "react-admin"

function BibleVerseQuickCreateButton({ chapter, onChange }) {
  const notify = useNotify()
  const [create, { loading }] = useCreate()
  const [showDialog, setShowDialog] = useState(false)
  const handleClick = () => {
    setShowDialog(true)
  }

  const handleCloseClick = () => {
    setShowDialog(false)
  }
  const handleSubmit = async (values) => {
    create(
      "bible-verses",
      { data: { chapter, ...values } },
      {
        onSuccess: () => {
          setShowDialog(false)
          onChange()
        },
        onFailure: ({ error }) => {
          notify(error.message, "error")
        },
      }
    )
  }

  return (
    <>
      <Button onClick={handleClick} label="Добавить">
        <Add />
      </Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="Create bible verse"
      >
        <DialogTitle>Добавить стих из Библии</DialogTitle>
        <Form onSubmit={handleSubmit}>
          <>
            <DialogContent>
              <NumberInput
                source="number"
                validate={required()}
                fullWidth
                label="Номер стиха"
              />
              <TextInput
                source="text"
                validate={required()}
                fullWidth
                label="Текст"
              />
            </DialogContent>
            <DialogActions>
              <Button
                label="Отменить"
                onClick={handleCloseClick}
                disabled={loading}
              >
                <Cancel />
              </Button>
              <SaveButton />
            </DialogActions>
          </>
        </Form>
      </Dialog>
    </>
  )
}

export default BibleVerseQuickCreateButton
