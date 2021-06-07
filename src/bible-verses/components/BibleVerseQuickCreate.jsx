import { useState } from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core"
import { Add, Cancel } from "@material-ui/icons"
import {
  Button,
  FormWithRedirect,
  NumberInput,
  required,
  SaveButton,
  TextInput,
  useCreate,
  useNotify,
} from "react-admin"
import React from "react"

function BibleVerseQuickCreateButton({ chapter, onChange }) {
  const [showDialog, setShowDialog] = useState(false)
  const [create, { loading }] = useCreate("bible-verses")
  const notify = useNotify()

  const handleClick = () => {
    setShowDialog(true)
  }

  const handleCloseClick = () => {
    setShowDialog(false)
  }

  const handleSubmit = async (values) => {
    create(
      { payload: { data: { chapter, ...values } } },
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
        <FormWithRedirect
          resource="bible-verses"
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
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
                <SaveButton
                  handleSubmitWithRedirect={handleSubmitWithRedirect}
                  pristine={pristine}
                  saving={saving}
                  disabled={loading}
                />
              </DialogActions>
            </>
          )}
        />
      </Dialog>
    </>
  )
}

export default BibleVerseQuickCreateButton
